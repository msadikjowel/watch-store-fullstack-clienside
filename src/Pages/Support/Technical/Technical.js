import React from 'react';
import Reviews from '../../Home/Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Technical = () => {
    return (
        <>
            <Header></Header>
            <div className="technicalSupportDetails container mt-5">
                <h2>Set up your Watch</h2>
                <p>Learn how to use your Phone to set up your new Watch.</p>
                <h2>What you need</h2>
                <p>To set up and use a new Apple Watch, you need an iPhone 6s or later with iOS 15 or later. Learn how to identify your iPhone model and how to update your iPhone to the latest version of iOS.</p>
            </div>

            <div className="steps container mt-5">
                <div className="step-1 ">
                    <div className='step-text'>
                        <p>Step-1</p>
                        <h2>Turn on your Apple Watch and put it on</h2>
                        <p>To turn on your Apple Watch, press and hold the side button until you see the Apple logo. This may take a few minutes. </p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos8-series7-watch-turn-on.png" alt="" />
                    </div>
                </div>
                <div className="step-1 ">
                    <div className='step-text'>
                        <p>Step-2</p>
                        <h2>Hold your Apple Watch close to your iPhone</h2>
                        <p>Wait for the "Use your iPhone to set up this Apple Watch" message to appear on your iPhone, then tap Continue. If you don't see this message, open the Watch app on your iPhone, tap All Watches, then tap Pair New Watch. </p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos8-series7-iphone12-pro-setup-put-on-watch.png" alt="" />
                    </div>
                </div>
                <div className="step-1 ">
                    <div className='step-text'>
                        <p>Step-3</p>
                        <h2>Hold your iPhone over the animation
                        </h2>
                        <p>Center the watch face in the viewfinder on your iPhone. Wait for a message to say that your Apple Watch is paired. If you can't use the camera, or you don't see the pairing animation or your iPhone can't read it, tap Pair Apple Watch Manually, then follow the steps that appear.

                        </p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos8-series7-ios15-iphone12-pro-setup-pair-animation.png" alt="" />
                    </div>
                </div>
                <div className="step-1 ">
                    <div className='step-text4'>
                        <p>Step-4</p>
                        <h2>Set up as new or restore from a backup

                        </h2>
                        <p>If this is your first Apple Watch, tap Set Up as New Apple Watch. Otherwise, tap Restore from Backup. If asked, update your Apple Watch to the latest version of watchOS.</p>

                        <p>Your Apple Watch might require a software update before you can set it up. If your iPhone says that a software update is available, tap Update Now and wait for the update process to finish.</p>

                        <p> Read the Terms and Conditions and tap Agree, then tap Agree again to continue.

                        </p>
                    </div>
                    <div></div>

                </div>
                <div className="step-1 ">
                    <div className='step-text4'>
                        <p>Step-5</p>
                        <h2>Sign in with your Apple ID


                        </h2>
                        <p>If asked, enter your Apple ID password. If you aren’t asked, you can sign in later from the Apple Watch app: Tap General Apple ID, then sign in. Certain features that require a cellular phone number won’t work on cellular models of Apple Watch unless you sign in to iCloud.

                        </p>
                        <p>If Find My isn't set up on your iPhone, you'll be asked to turn on Activation Lock. If you see an Activation Lock screen, your Apple Watch is already linked to an Apple ID. You need to enter the email address and password for that Apple ID to continue set up. If your Apple Watch was previously owned, you might need to contact the previous owner to remove Activation Lock. </p>




                    </div>
                    <div></div>

                </div>

                <div className="step-1 ">
                    <div className='step-text4'>
                        <p>Step-6</p>
                        <h2>Choose your settings
                        </h2>
                        <p>Your Apple Watch shows you which settings it shares with your iPhone. If you turned on features such as Find My, Location Services, Wi-Fi Calling, and Diagnostics for your iPhone, these settings automatically turn on for your Apple Watch. </p>
                        <p>Next, you can choose to use other settings, like Route Tracking and Siri. If Siri isn’t already set up on your iPhone, it will turn on after you choose this option. You can also choose the text size for your watch.

                        </p>
                    </div>
                    <div></div>

                </div>

                <div className="step-1 ">
                    <div className='step-text'>
                        <p>Step-7</p>
                        <h2>Create a passcode
                        </h2>
                        <p>You can skip creating a passcode, but you need one for features like Apple Pay. </p>
                        <p>
                            On your iPhone, tap Create a Passcode or Add a Long Passcode, then switch to your Apple Watch to enter your new code. To skip, tap Don't Add Passcode. </p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos8-ios15-iphone12-pro-setup-create-passcode.png" alt="" />
                    </div>
                </div>
                <div className="step-1 ">
                    <div className='step-text'>
                        <p>Step-8</p>
                        <h2>Choose features and apps
                        </h2>
                        <p>Next, you'll also be asked to set up Apple Pay by adding a card. Then we'll walk you through setting up features like automatic watchOS updates, SOS, and Activity. On cellular models of Apple Watch, you can also set up cellular. </p>
                        <p>
                            Finally, you can install your apps that are compatible with Apple Watch, or choose to install apps individually later.

                        </p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos8-ios15-iphone12-pro-setup-install-available-apps.png" alt="" />
                    </div>
                </div>
                <div className="step-1 ">
                    <div className='step-text'>
                        <p>Step-9</p>
                        <h2>Wait for your devices to sync
                        </h2>
                        <p>Depending on how much data you have, syncing might take some time. While you wait for your watch to sync, try Apple Watch Basics to learn a little about how to use your watch.

                        </p>
                        <p>Keep your devices close together until you hear a chime and feel a tap from your Apple Watch, then press the Digital Crown.
                        </p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos8-ios15-iphone12-pro-setup-watch-syncing.png" alt="" />
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Technical;