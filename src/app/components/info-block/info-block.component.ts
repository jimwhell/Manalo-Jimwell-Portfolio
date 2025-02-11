import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../certificate';

@Component({
  selector: 'app-info-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.css',
})
export class InfoBlockComponent {
  @Input() mode: 'certifications' | 'profile' = 'profile';
  @Input() certificateList?: Certificate[];
  @Input() imgUrl?: string;
  @Input() altText?: string;
  @Input() infoText?: string;

  downloadCertificate(filePath: string) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'certificate.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
