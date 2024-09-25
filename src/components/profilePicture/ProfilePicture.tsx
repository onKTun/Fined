import Image from "next/image"



export default function ProfilePicture(Props){

return(

<Image className={Props.className} src={Props.src} alt = {Props.alt}/>
             

)


}