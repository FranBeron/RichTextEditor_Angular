import { Component } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css'],
})
export class RichTextEditorComponent {
  public config: any;
  public editorData : any;
  public componentEvents: string[] = [];

  constructor() {
    this.config = {
      //skin: 'Moono-Lisa',
      //uiColor: '#ffffff',
      toolbar: [
        {
          name: 'clipboard',
          groups: ['clipboard', 'undo'],
          items: [
            'Undo',
            'Redo',
          ],
        },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        {
          name: 'insert',
          items: ['Image', 'Table', 'HorizontalRule'],
        },
        { name: 'tools', items: ['Maximize'] },
        {
          name: 'document',
          groups: ['mode', 'document', 'doctools'],
          items: ['Source'],
        },
        { name: 'others', items: ['-'] },
        '/',
        {
          name: 'basicstyles',
          groups: ['basicstyles', 'cleanup'],
          items: ['Bold', 'Italic', 'Strike', '-'],
        },
        {
          name: 'paragraph',
          groups: ['list', 'indent', 'blocks', 'align', 'bidi'],
          items: [
            'NumberedList',
            'BulletedList',
            '-',
            'Outdent',
            'Indent',
            '-',
            'Blockquote',
          ],
        },
        { name: 'styles', items: ['Styles', 'Format'] },
      ],
    };
  }


}
