import {Component, OnInit, Directive} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
    uploader: FileUploader = new FileUploader({url: URL});
    hasBaseDropZoneOver: false;
    hasAnotherDropZoneOver: false;
    file: File;

    public onChange(event): void {
        console.log('onChange');
        const files = event.srcElement.files;
        console.log(files);
    }

    constructor() {
    }

    ngOnInit() {
        // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (fileItem) => {
            fileItem.withCredentials = false;
            console.log(fileItem); // fileItem is the file object
        };


        // overide the onCompleteItem property of the uploader so we are
        // able to deal with the server response.
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log('ImageUpload:uploaded:', item, status, response);
        };
    }


    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }





}
