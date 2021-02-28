import { Plugin } from '@vizality/entities';
import { getModule } from "@vizality/webpack";
import { patch, unpatch } from "@vizality/patcher"


export default class amogus extends Plugin {
  start () {
      const Message = getModule(m => m.type && m.type.displayName === 'MessageContent')
      console.log(Message)
      patch('amoguspng', Message, 'type', (args, res) => {
      const img = document.getElementsByTagName("img")
      for (let i = 0; i < img.length; i++) {
        const element = img[i];
        element.setAttribute("src", "https://cdn.discordapp.com/attachments/735710639410118817/815652065749368883/amogus.png")
      }
      const video = document.getElementsByTagName("video")
      for (let i = 0; i < video.length; i++) {
        const element = video[i];
        element.setAttribute("src", "https://cdn.discordapp.com/attachments/773508852247035915/812451604346830868/when_IMPORSTOR1.mp4")
      }
      console.log(img)
        res.props.children[0] = "amogus" 
        return res;
      })
  }

  stop () {
    unpatch('amoguspng')
  }
}