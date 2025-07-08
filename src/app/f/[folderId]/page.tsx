import { db } from "~/server/db";
import GoogleDriveClone from "../../drive-content";
import { files_table as filesScehma, folders_table as foldersSchema } from "~/server/db/schema";
import { eq } from "drizzle-orm";

async function getParents(folderId: number) {
    const parents = []
    let currentId: number | null = folderId;
    while (currentId !== null) {
        const folder = await db
            .selectDistinct()
            .from(foldersSchema)
            .where(eq(foldersSchema.id, currentId))
        if (!folder[0]) throw new Error(`Folder with ID ${currentId} not found`);
        parents.unshift(folder[0]);
        if(currentId === folder[0].parent) {
            break;
        }
        currentId = folder[0]?.parent;
    }
    return parents

}

export default async function FolderPage(props: { params: Promise<{ folderId: string }> }) {
    const params = await props.params;
    const folderId = parseInt(params.folderId, 10);
    if (isNaN(folderId)) {
        return <div>Invalid folder ID</div>;
    }
    const filesPromise = db.select().from(filesScehma).where(eq(filesScehma.parent, folderId));
    const foldersPromise = db.select().from(foldersSchema).where(eq(foldersSchema.parent, folderId));
    const parentsPromise = getParents(folderId);
    const [files, folders, parents] = await Promise.all([filesPromise, foldersPromise, parentsPromise]);

    return <GoogleDriveClone folders={folders} files={files} parents={parents} />
}