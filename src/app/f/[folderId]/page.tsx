import GoogleDriveClone from "../../drive-content";
import { QUERIES } from "~/server/db/queries";

export default async function FolderPage(props: { params: Promise<{ folderId: string }> }) {
    const params = await props.params;
    const folderId = parseInt(params.folderId, 10);
    if (isNaN(folderId)) {
        return <div>Invalid folder ID</div>;
    }
    const [files, folders, parents] = await Promise.all([QUERIES.getFiles(folderId), QUERIES.getFolders(folderId), QUERIES.getParentsForFolders(folderId)]);

    return <GoogleDriveClone folders={folders} files={files} parents={parents} folderId={folderId} />
}