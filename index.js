/*
* You are now retarded.
*
* I am not responsible for bricked brains, dead usb sticks,
* or you getting fired because your pc opened 2 seconds slower. Please
* do some research if you have any concerns about features included in this software
* before installing it! YOU are choosing to make these modifications, and if
* you point the finger at me for messing up your pc, I will laugh at you. 
*/

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
        if (element.getAttribute("src") != "https://cdn.discordapp.com/attachments/773508852247035915/812451604346830868/when_IMPORSTOR1.mp4") {
        element.setAttribute("src", "https://cdn.discordapp.com/attachments/773508852247035915/812451604346830868/when_IMPORSTOR1.mp4")
        }
      }
        res.props.children[0] = "amogus" 
        const username = document.getElementsByClassName("username-1A8OIy")
        for (let i = 0; i < username.length; i++) {
          const element = username[i];
          element.innerHTML = "amogus"
        }
        return res;
      })
  }

  stop () {
    unpatch('amoguspng');
	setTimeout(() => window.location.reload(), 2000)
  }
}
