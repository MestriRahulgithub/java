import React from 'react'

const About = () => {
  return (
    <div>
      <div class="container" id="about" style={{backgroundColor:'violet'}}>
        <div class="row">
            <div class="col-md-6">
                <img src="https://tse1.mm.bing.net/th?id=OIP.z825TrknRmH0fWdsQ096-QHaEK&pid=Api&P=0&h=180"
                    style={{width: '200px'}}  class="img-fluid"></img>
                <img src="https://tse2.mm.bing.net/th?id=OIP.Kab5r7J_SX3yM6YxzS3L3AHaEI&pid=Api&P=0&h=180"
                    style={{width: '200px', margin: '20px', paddingbottom: '30px'}}  class="img-fluid"/>
                <br></br>
                <img src="https://tse3.mm.bing.net/th?id=OIP.C4p1YJOhefVjV1dwvku2CwHaDL&pid=Api&P=0&h=180"
                    style={{width: '200px', margin: '60px'}} class="img-fluid"/>

            </div>
            <div class="col-md-6">
                <h2>About Our Smartwatch</h2>
                <p>
                    A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local
                    touchscreen interface for daily use, while an associated smartphone app provides management and
                    telemetry, such as long-term biomonitoring. While early models could perform basic tasks, such as
                    calculations, digital time telling, translations, and game-playing, smartwatches released since 2015
                    have more general functionality closer to smartphones, including mobile apps, a mobile operating
                    system and WiFi/Bluetooth connectivity. Some smartwatches function as portable media players, with
                    FM radio and playback of digital audio and video files via a Bluetooth headset. Some models, called
                    watch phones (or phone watches), have mobile cellular functionality such as making telephone calls.
                </p>
                <p>
                    In June 2000, IBM displayed a prototype for the WatchPad, a wristwatch that ran Linux. The original
                    version had only 6 hours of battery life, which was later extended to 12.It featured 8 MB of
                    memory and ran Linux 2.2.The device was later upgraded with an accelerometer, vibrating
                    mechanism, and fingerprint sensor. IBM began to collaborate with Citizen Watch Co. to create the
                    "WatchPad". The WatchPad 1.5 features aQVGA monochrome touch sensitive display and runs
                    Linux.It also features calendar software, Bluetooth, 8 MB of RAM and 16 MB of flash
                    memory.Citizen was hoping to market the watch to students and businessmen, with a retail
                    price of around $399. Epson Seiko introduced their Chrono-bit wristwatch in September 2000. The
                    Chrono-bit watches have a rotating bezel for data input, synchronize PIM data via a serial cable,
                    and can load custom watch faces.
                </p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default About;
