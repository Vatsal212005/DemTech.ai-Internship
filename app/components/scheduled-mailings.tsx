"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchMailings, deleteMailing } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import { Trash2 } from "lucide-react"

export default function ScheduledMailings() {
  const queryClient = useQueryClient()

  const { data: mailings } = useQuery({
    queryKey: ["mailings"],
    queryFn: fetchMailings,
  })

  const deleteMailingMutation = useMutation({
    mutationFn: deleteMailing,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mailings"] })
      toast({
        title: "Mailing Deleted",
        description: "The mailing has been successfully deleted.",
      })
    },
  })

  const handleDelete = (id: number) => {
    deleteMailingMutation.mutate(id)
  }

  return (
    <div className="space-y-4">
      {mailings && mailings.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">ID</TableHead>
              <TableHead className="font-semibold">Mailer ID</TableHead>
              <TableHead className="font-semibold">List ID</TableHead>
              <TableHead className="font-semibold">Schedule</TableHead>
              <TableHead className="text-right font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mailings.map((mailing) => (
              <TableRow key={mailing.id} className="hover:bg-muted/30 transition-colors">
                <TableCell>{mailing.id}</TableCell>
                <TableCell>{mailing.mailerId}</TableCell>
                <TableCell>{mailing.listId}</TableCell>
                <TableCell>{new Date(mailing.schedule).toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(mailing.id)}
                    disabled={deleteMailingMutation.isPending}
                    className="hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-muted-foreground">No scheduled mailings found.</p>
      )}
    </div>
  )
}

