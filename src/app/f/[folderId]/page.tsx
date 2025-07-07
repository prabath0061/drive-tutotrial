import { db } from "~/server/db";
import GoogleDriveClone from "../../drive-content";
import { files as filesScehma, folders as foldersSchema } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export default async function FolderPage(props: { params: Promise<{ folderId: string }>}) {
    const params = await props.params;
    const folderId = parseInt(params.folderId, 10);
    if (isNaN(folderId)) {
        return <div>Invalid folder ID</div>;
    }
    const files= await db.select().from(filesScehma).where(eq(filesScehma.parent, folderId));
    const folders = await db.select().from(foldersSchema).where(eq(foldersSchema.parent, folderId));

    return <GoogleDriveClone folders={folders} files={files}/>
}