import { Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import loader from "@monaco-editor/loader";
// import * as monaco from "monaco-editor";

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent implements OnInit, OnDestroy {


  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;
  editor!: any;
  platformId: Object;

  constructor(@Inject(PLATFORM_ID) private a: Object) {
    this.platformId = a;
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      loader.init().then(monaco => {
        this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
          value: `function alertMessage() {
          alert("Hello");
          }`,
          language: 'javascript',
          theme: 'vs-dark'
        })

      })

    }
  }

  setLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (isPlatformBrowser(this.platformId)) {
      loader.init().then(monaco => {
        monaco.editor.setModelLanguage(this.editor.getModel()!, selectElement.value);

      })

    }
  }
  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.dispose();
    }
  }

}
