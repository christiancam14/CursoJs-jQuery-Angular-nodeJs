import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Project } from 'src/app/models/project/project.module';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from 'src/app/services/global.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status!: string;
  public filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2019,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    //Guardar datos básicos
    this._projectService.saveProject(this.project).subscribe({
      next: response => {
        if(response.project){

          //Subir imagen
          this._uploadService.makeFileRequest( global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
          .then((result: any) => {
            this.status = 'success';
            console.log(result, "hola", response);
            form.reset();
          });

        }else{
          this.status = 'failed';
        }
      },
      error : (err: any) => {
        console.log(err);
      }
    });
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
