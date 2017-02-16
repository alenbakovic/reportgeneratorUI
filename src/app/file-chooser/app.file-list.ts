import { Component } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    selector: 'rg-file-list',
    templateUrl: 'app.file-list.html'
})
export class RGFileList {
    uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});
}