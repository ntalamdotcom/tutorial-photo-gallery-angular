import { Component } from '@angular/core';
import { Filesystem, FilesystemDirectory } from '@capacitor/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  public async showExplorer() {
    console.log('fuel is pumping engine...');
    const fileName = `MyAwesomeFile.pdf`;
    try {
      Filesystem.writeFile({
        path: fileName,
        data: 'awesome possum',
        directory: FilesystemDirectory.Documents
        // encoding: FilesystemEncoding.UTF8
      }).then((writeFileResult) => {
        console.log('file created');
        Filesystem.getUri({
          directory: FilesystemDirectory.Documents,
          path: fileName
        }).then((getUriResult) => {
          const path = getUriResult.uri;
          /*this.fileOpener.open(path, 'application/pdf')
            .then(() => {
              // console.log('File is opened');
            })
            .catch(error => {
              console.log('Error opening file', error);
            });*/
        }, (error) => {
          console.log(error);
        });
      });
    } catch (error) {
      console.error('Unable to write file', error);
    }
  }
}
