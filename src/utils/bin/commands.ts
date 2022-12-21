// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, we are GCC (Galvez Computer Club), not the compiler ;)
Welcome to our website!
More about us:
'nextmeet' - where'll be our next meet =).
'readme' - if you are new here, start here =).
'sumfetch' - short summary.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// export const linkedin = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return 'Single directory file system =(';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const hacklab = (args?: string[]): string => {
  return `
  Que es un Hacklab?
  ------------------
  Un Hacklab es un espacio de trabajo colaborativo en el que se fomenta el aprendizaje y 
  el desarrollo de habilidades técnicas en el campo de la tecnología y la informática. 
  Los Hacklabs también suelen ser lugares donde se llevan a cabo actividades como talleres, charlas, hackatones 
  y otras actividades relacionadas con la tecnología. Suelen ser lugares abiertos y colaborativos en los que se 
  fomenta la participación de todos y se comparten conocimientos y experiencias. 

  Objetivos del Galvez Computer Club / GCC
  ----------------------------------------
  - Proporcionar un espacio de trabajo colaborativo para aprender y desarrollar habilidades técnicas relacionadas
    con la tecnología y la informática.
  - Organizar talleres y charlas para compartir conocimientos y experiencias con otros miembros de la comunidad.
  - Promover la participación activa y el aprendizaje por el descubrimiento, a través de la realización de proyectos prácticos.
  - Fomentar la colaboración y el trabajo en equipo en el desarrollo de proyectos tecnológicos.
  - Ayudar a crear una comunidad activa y unida de personas interesadas en la tecnología y la informática en la ciudad.

  `;
};

// Banner
export const banner = (args?: string[]): string => {

  return `
                                                              
  GGGGGGGGGGGGG        CCCCCCCCCCCCC       CCCCCCCCCCCCC
  GGG::::::::::::G     CCC::::::::::::C    CCC::::::::::::C
GG:::::::::::::::G   CC:::::::::::::::C  CC:::::::::::::::C
G:::::GGGGGGGG::::G  C:::::CCCCCCCC::::C C:::::CCCCCCCC::::C
G:::::G       GGGGGG C:::::C       CCCCCCC:::::C       CCCCCC
G:::::G              C:::::C             C:::::C              
G:::::G              C:::::C             C:::::C              
G:::::G    GGGGGGGGGGC:::::C             C:::::C              
G:::::G    G::::::::GC:::::C             C:::::C              
G:::::G    GGGGG::::GC:::::C             C:::::C              
G:::::G        G::::GC:::::C             C:::::C              
G:::::G       G::::G C:::::C       CCCCCCC:::::C       CCCCCC
G:::::GGGGGGGG::::G  C:::::CCCCCCCC::::C C:::::CCCCCCCC::::C
GG:::::::::::::::G   CC:::::::::::::::C  CC:::::::::::::::C
  GGG::::::GGG:::G     CCC::::::::::::C    CCC::::::::::::C
     GGGGGG   GGGG        CCCCCCCCCCCCC       CCCCCCCCCCCCC


>>> Galvez Computer Club <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.siteUrl}" target="_blank">[gcc.ar]</a></u>

${hacklab()}

Para ver una lista de los comandos que puedes ingresar escribe:
  help

`;
};
