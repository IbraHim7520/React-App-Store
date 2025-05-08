import React from 'react';

const Faq = () => {
    return (
        <div className='p-12'>
        <h1 className='text-4xl font-bold text-center p-5'>Some Freequently Asked Questions:</h1>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">1. How can I install apps?</div>
  <div className="collapse-content text-sm">To install apps, open the App Store on your device, browse or search for the desired app, and tap the "Get" or "Download" button. You may need to enter your Apple ID password or use Face ID/Touch ID to confirm the installation.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">2.Are these apps secure?</div>
  <div className="collapse-content text-sm">Yes, apps available on the App Store undergo a rigorous review process by Apple to ensure they are free from known malware and have not been tampered with. Additionally, Apple enforces strict security controls to protect user data and maintain system integrity. </div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">3.Do these apps collect my private information?</div>
  <div className="collapse-content text-sm">Some apps may request access to personal information such as your location, contacts, or photos to provide certain features. However, Apple provides detailed privacy information on the App Store to help you understand each app's data collection practices. You can manage app permissions in your device's privacy settings. .</div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">4. How can I uninstall apps?</div>
  <div className="collapse-content text-sm">To uninstall an app, touch and hold its icon on your Home Screen until it jiggles, then tap the "Remove" icon (an "X" or "-") and confirm the deletion. Alternatively, you can go to your device's settings, navigate to the list of installed apps, and select the app you wish to remove. </div>
</div>

<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">5. Can I share apps with others?</div>
  <div className="collapse-content text-sm">Apps purchased from the App Store are tied to your Apple ID and cannot be shared directly with others. However, you can enable Family Sharing, which allows family members to share purchases, including apps, with each other. Note that not all apps support Family Sharing, and some in-app purchases may not be shareable. </div>
</div>
        </div>
    );
};

export default Faq;