import { Icons } from '@shared/components/icon/icons';

const returned: Nav[] = [
  {
    section: 'General',
    paths: [
      {
        icon: 'MDOUTLINEDASHBOARD',
        name: 'Dashboard',
        path: '/admin',
        subSections: [],
      },
      {
        icon: 'IMSTATSBARS',
        name: 'Stats',
        path: 'stats',
        subSections: [],
      },
      {
        icon: 'MDCONTROLCAMERA',
        name: 'Manage',
        path: 'func',
        subsectionsActive: false,
        subSections: [
          {
            name: 'Social Media',
            path: 'manage/social-media',
          },
          {
            name: 'Skills',
            path: 'manage/skills',
          },
          {
            name: 'Projects',
            path: 'manage/projects',
          },
          {
            name: 'Jobs',
            path: 'manage/jobs',
          },
        ],
      },
      {
        icon: 'AIOUTLINECONTACTS',
        name: 'Contact',
        path: 'contact',
        subSections: [],
      },
      {
        icon: 'GRDOCUMENTTEST',
        name: 'Blog',
        path: 'blogs',
        subSections: [],
      },
    ],
  },
  {
    section: 'Personal',
    paths: [
      {
        icon: 'AIOUTLINESETTING',
        name: 'Settings',
        path: 'settings',
        subSections: [],
      },
      {
        icon: 'BILOGOUT',
        name: 'Log Out',
        path: 'func',
        subSections: [],
      },
    ],
  },
];

interface Nav {
  section: string;
  paths: {
    icon: Icons;
    name: string;
    path: string;
    subsectionsActive?: boolean;
    subSections: {
      name: string;
      path: string;
    }[];
  }[];
}

export default returned;
