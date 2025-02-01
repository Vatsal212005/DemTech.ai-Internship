"use client"

import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchMailers, fetchLists, createMailing } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function MailingScheduler() {
  const [mailerId, setMailerId] = useState("")
  const [listId, setListId] = useState("")
  const [schedule, setSchedule] = useState("")

  const queryClient = useQueryClient()

  const { data: mailers } = useQuery({
    queryKey: ["mailers"],
    queryFn: fetchMailers,
  })

  const { data: lists } = useQuery({
    queryKey: ["lists"],
    queryFn: fetchLists,
  })

  const createMailingMutation = useMutation({
    mutationFn: createMailing,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mailings"] })
      setMailerId("")
      setListId("")
      setSchedule("")
      toast({
        title: "Mailing Scheduled",
        description: "Your mailing has been successfully scheduled.",
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mailerId && listId && schedule) {
      createMailingMutation.mutate({
        mailerId: Number.parseInt(mailerId),
        listId: Number.parseInt(listId),
        schedule,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="mailer">Mailer</Label>
          <Select value={mailerId} onValueChange={setMailerId}>
            <SelectTrigger id="mailer">
              <SelectValue placeholder="Select a mailer" />
            </SelectTrigger>
            <SelectContent>
              {mailers?.map((mailer) => (
                <SelectItem key={mailer.id} value={mailer.id.toString()}>
                  {mailer.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="list">List</Label>
          <Select value={listId} onValueChange={setListId}>
            <SelectTrigger id="list">
              <SelectValue placeholder="Select a list" />
            </SelectTrigger>
            <SelectContent>
              {lists?.map((list) => (
                <SelectItem key={list.id} value={list.id.toString()}>
                  {list.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="schedule">Schedule</Label>
        <Input id="schedule" type="datetime-local" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
      </div>

      <Button type="submit" className="w-full" disabled={createMailingMutation.isPending}>
        {createMailingMutation.isPending ? "Scheduling..." : "Schedule Mailing"}
      </Button>
    </form>
  )
}

