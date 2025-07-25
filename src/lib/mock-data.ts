export type TFile= {
  id: string
  name: string
  type: "file"
  url: string
  parent: string
  size: string
}

export type TFolder ={
  id: number
  name: string
  type: "folder"
  parent: number | null
}

export const mockFolders: TFolder[] = [
  { id: 1, name: "Root", type: "folder", parent: null },
  { id: 2, name: "Documents", type: "folder", parent: 1 },
  { id: 3, name: "Images", type: "folder", parent: 1 },
  { id: 4, name: "Work", type: "folder", parent: 2 },
  { id: 5, name: "Presentations", type: "folder", parent: 2 },
]

export const mockFiles: TFile[] = [
  { id: "4", name: "Resume.pdf", type: "file", url: "/files/resume.pdf", parent: "1", size: "1.2 MB" },
  { id: "5", name: "Project Proposal.docx", type: "file", url: "/files/proposal.docx", parent: "1", size: "2.5 MB" },
  { id: "6", name: "Vacation.jpg", type: "file", url: "/files/vacation.jpg", parent: "2", size: "3.7 MB" },
  { id: "7", name: "Profile Picture.png", type: "file", url: "/files/profile.png", parent: "2", size: "1.8 MB" },
  { id: "9", name: "Q4 Report.pptx", type: "file", url: "/files/q4-report.pptx", parent: "8", size: "5.2 MB" },
  { id: "10", name: "Budget.xlsx", type: "file", url: "/files/budget.xlsx", parent: "3", size: "1.5 MB" },
]

