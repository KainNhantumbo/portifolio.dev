'use client';

import { SoftwareItem } from '@/types';
import {
  AftereffectsOriginal,
  AmazonwebservicesPlainWordmark,
  AndroidstudioOriginal,
  BashPlain,
  CanvaOriginal,
  ChromeOriginal,
  FedoraOriginal,
  FigmaOriginal,
  GithubOriginal,
  IllustratorOriginal,
  NotionOriginal,
  VscodeOriginal
} from 'devicons-react';

export const TOOLS: SoftwareItem[] = [
  {
    name: 'Photoshop',
    icon: FigmaOriginal,
    color: '#31A8FF',
    x: -35,
    y: 15,
    size: 1.4,
    rotation: -10
  },
  {
    name: 'Illustrator',
    color: '#FF9A00',
    icon: IllustratorOriginal,
    x: 35,
    y: -25,
    size: 1.2,
    rotation: 10
  },
  {
    name: 'Canva',
    icon: CanvaOriginal,
    color: '#31A8FF',
    x: -5,
    y: -35,
    size: 1.3
  },
  {
    name: 'After Effects',
    icon: AftereffectsOriginal,
    color: '#9999FF',
    x: 42,
    y: 10,
    size: 1.0
  },
  {
    name: 'Fedora',
    icon: FedoraOriginal,
    color: '#1E90FF',

    x: -30,
    y: -20,
    size: 1.6,
    rotation: -15
  },
  {
    name: 'Bash',
    icon: BashPlain,
    color: '#000',
    x: 25,
    y: 35,
    size: 1.2
  },
  {
    name: 'VS Code',
    icon: VscodeOriginal,
    color: '#007ACC',
    x: -25,
    y: 30,
    size: 1.1
  },
  {
    name: 'GitHub',
    icon: GithubOriginal,
    color: '#000',
    x: 15,
    y: -40,
    size: 0.8
  },
  {
    name: 'AWS',
    icon: AmazonwebservicesPlainWordmark,
    color: '#61DAFB',
    x: -45,
    y: 0,
    size: 0.9
  },
  {
    name: 'Notion',
    icon: NotionOriginal,
    color: '#000000',
    x: -15,
    y: 10,
    size: 1.0
  },
  {
    name: 'Android Studio',
    icon: AndroidstudioOriginal,
    color: '#5E6AD2',
    x: 10,
    y: 20,
    size: 0.9
  },
  {
    name: 'Chrome',
    icon: ChromeOriginal,
    color: '#4285F4',
    x: 45,
    y: -10,
    size: 0.8
  }
];
