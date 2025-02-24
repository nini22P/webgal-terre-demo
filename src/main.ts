import './style.css'
import { WebContainer } from '@webcontainer/api';
import { files } from './files';

document.querySelector('#app')!.innerHTML = `
    <iframe src="./loading.html" frameborder="0"></iframe>
  `

const iframeEl: HTMLIFrameElement | null = document.querySelector('iframe');

let webcontainerInstance: WebContainer;

window.addEventListener('load', async () => {
  webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);
  await webcontainerInstance.spawn('npm', ['install']);
  await webcontainerInstance.spawn('npm', ['start']);

  webcontainerInstance.on('server-ready', (_port, url) => {
    if (iframeEl)
      iframeEl.src = url;
  });
});