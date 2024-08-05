import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  code: string = '';
  selectedLanguage: string = 'javascript';
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  output: string = '';

  languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python3' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
    { label: 'C', value: 'c' }
  ];

  constructor() {}

  onLanguageChange() {
    this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
  }

  runCode() {
    // this.tioService.runCode(this.selectedLanguage, this.code).then(output => {
    //   this.output = output;
    // });
    console.log(" executing program");
  }
}
