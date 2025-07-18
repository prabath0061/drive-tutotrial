import GoogleDriveClone from "../../drive-content";
import { getFiles, getFolders, getParentsForFolders } from "~/server/db/queries";

export default async function FolderPage(props: { params: Promise<{ folderId: string }> }) {
    const params = await props.params;
    const folderId = parseInt(params.folderId, 10);
    if (isNaN(folderId)) {
        return <div>Invalid folder ID</div>;
    }
    const [files, folders, parents] = await Promise.all([getFiles(folderId), getFolders(folderId), getParentsForFolders(folderId)]);

    return <GoogleDriveClone folders={folders} files={files} parents={parents} />
}