import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    selector: 'rg-file-list',
    templateUrl: 'app.file-list.html',
    styleUrls: ['app.file-list.css']
})
export class RGFileList {
    progress: string = "Overall Uplaod Progress";
    filesToUpload: string = "Files To Upload:";
    tableHeader: string[] = ["File Name", "Size", "Status", "Action"];

    uploadSucess: boolean = false;

    uploader: FileUploader;

    constructor() {
        this.uploader =  new FileUploader({ url: 'http://localhost:3001/upload' });
        this.uploader.onCompleteAll = () => {
            console.log("onCompleteAll");
            this.uploadSucess = true;
        }
    }

    uploadAll(): void {
        this.uploader.uploadAll();
    }

    removeAll(): void {
        this.uploader.clearQueue();
        this.uploadSucess = false;
    }

    startFileDownload(): void {
        console.log("Downloading files");
    }

}