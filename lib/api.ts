// Mock data
const mailers = [
  { id: 1, name: "Welcome Email" },
  { id: 2, name: "Newsletter" },
  { id: 3, name: "Promotional Offer" },
]

const lists = [
  { id: 1, name: "All Subscribers" },
  { id: 2, name: "New Users" },
  { id: 3, name: "Inactive Users" },
]

let mailings: Array<{
  id: number
  mailerId: number
  listId: number
  schedule: string
}> = []

// Mock API functions
export async function fetchMailers() {
  return new Promise<typeof mailers>((resolve) => {
    setTimeout(() => resolve(mailers), 500)
  })
}

export async function fetchLists() {
  return new Promise<typeof lists>((resolve) => {
    setTimeout(() => resolve(lists), 500)
  })
}

export async function fetchMailings() {
  return new Promise<typeof mailings>((resolve) => {
    setTimeout(() => resolve(mailings), 500)
  })
}

export async function createMailing(mailing: Omit<(typeof mailings)[0], "id">) {
  return new Promise<(typeof mailings)[0]>((resolve) => {
    setTimeout(() => {
      const newMailing = { ...mailing, id: Date.now() }
      mailings.push(newMailing)
      resolve(newMailing)
    }, 500)
  })
}

export async function updateMailing(mailing: (typeof mailings)[0]) {
  return new Promise<(typeof mailings)[0]>((resolve) => {
    setTimeout(() => {
      const index = mailings.findIndex((m) => m.id === mailing.id)
      if (index !== -1) {
        mailings[index] = mailing
        resolve(mailing)
      } else {
        throw new Error("Mailing not found")
      }
    }, 500)
  })
}

export async function deleteMailing(id: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      mailings = mailings.filter((m) => m.id !== id)
      resolve()
    }, 500)
  })
}

