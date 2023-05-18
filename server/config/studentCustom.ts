import type { CustomCharacter } from '../src/content/types'
export const studentCustom: CustomCharacter = {
  name: 'Alice',
  type: 'Student',
  image: '/public/student/student.svg',
  progressBar: [
    {
      name: 'person',
      onboardingStep: 'PICK_CHARACTER',
      iconLight: './icon-person-light.svg',
      iconDark: './icon-person-dark.svg',
    },
    {
      name: 'moon',
      onboardingStep: 'SETUP_START',
      iconLight: './moonLight.svg',
      iconDark: './svgmoonDark',
    },
    {
      name: 'wallet',
      onboardingStep: 'CHOOSE_WALLET',
      iconLight: './walletLight.svg',
      iconDark: './walletDark.svg',
    },
    {
      name: 'notification',
      onboardingStep: 'ACCEPT_CREDENTIAL',
      iconLight: './notificationLight.svg',
      iconDark: './notificationDark.svg',
    },
    {
      name: 'balloon',
      onboardingStep: 'SETUP_COMPLETED',
      iconLight: './balloonLight.svg',
      iconDark: './balloonDark.svg',
    },
  ],
  onboarding: [
    {
      screenId: 'PICK_CHARACTER',
      title: 'Meet Alice',
      text: "Meet Alice (that's you in this demo!). Alice is a student at BestBC College. To help make student life easier, BestBC College is going to offer Alice a digital Student Card to put in her BC Wallet.",
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'BC Wallet is a new app for storing and using credentials on your smartphone. Credentials are things like IDs, licenses and diplomas. \nUsing your BC Wallet is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use two credentials to prove who you are and access court materials online instead of in-person.',
      image: '/public/common/getStarted.svg',
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: "Install BC Wallet",
      text: 'First, install the BC Wallet app onto your smartphone. Select the button below for instructions and the next step.',
      image: '/public/common/app-store-screenshots.png',
    },
    {
      screenId: 'CONNECT',
      title: 'Connect with BestBC College',
      text: 'Imagine, as Alice, you are logged into the BestBC College website (see below). They want to offer you a Digital Student Card. Use your BC Wallet to scan the QR code from the website.',
      image: '/public/student/onboarding-connect-light.svg',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your student card',
      text: "Your wallet now has a secure and private connection with BestBC College. You should have received an offer in BC Wallet for a Student Card.\nReview what they are sending, and choose 'Accept offer'.",
      image: '../assets/light/onboarding-credential-light.svg',
      issuer_name: 'BestBC College',
      credentials: [
        {
          name: 'student_card',
          icon: '/public/student/icon-student.svg',
          attributes: [
            {
              name: 'student_first_name',
              value: 'Alice',
            },
            {
              name: 'student_last_name',
              value: 'Smith',
            },
            {
              name: 'expiry_date',
              value: '20270517',
            },
          ],
        },
      ],
    },
    {
      screenId: 'SETUP_COMPLETED',
      title: "You're all set!",
      text: 'Congratulations, you’ve just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
      image: '../assets/light/onboarding-completed-light.svg',
    },
  ],
  useCases: [
    {
      id: 'clothesOnline',
      name: 'Cool Clothes Online',
      screens: [
        {
          screenId: 'START',
          title: 'Getting a student discount',
          text: "Alice (that's you in this demo!) can get a student discount on her online purchase. In this example, you will just tell Cool Clothes Online you're a student.",
          image: '/public/student/useCases/card-school.svg',
        },
        {
          screenId: 'CONNECTION',
          title: "Start proving you're a student",
          text: "Imagine, as Alice, you are in the checkout process for Cool Clothes Online. They're offering you a 15% discount on your purchase if you can prove you're a student. First, scan the QR code.",
          image: '/public/student/useCases/cool-clothes-no-overlay.png',
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "BC Wallet will now ask you to confirm what to send. Notice how it will only share if the credential has expired, not even the expiry date itself gets shared. You don't have to share anything else for it to be trustable.",
          requestOptions: {
            title: 'Cool Clothes Online Request',
            text: 'Cool Clothes Online would like some of your personal information.',
            requestedCredentials: [
              {
                name: 'student_card',
                predicates: [
                  {
                    name: 'expiry_date',
                    type: '>=',
                    value: '20230517',
                  },
                ],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "You proved that you're a student, and Cool Clothes Online gave you the discount. It only took a few seconds, you revealed minimal information, and Cool Clothes Online could easily and automatically trust what you sent.",
          image: '/public/student/onboarding/student-accepted.svg',
        },
      ],
    },
    {
      id: 'study',
      name: 'BestBC College',
      screens: [
        {
          screenId: 'START',
          title: 'Book a study room',
          text: "Alice has lots of work to do, and needs a study room for some peace and quiet. In this example, we'll present some info from our Student Card, but just what's needed to book the room.",
          image: '/public/student/useCases/card-school.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start booking the room',
          text: "Imagine you're on the room booking page for BestBC College, abd you've chosen a data and time. Now they just need to confirm a few details. Scan the QR code to continue.",
          image: '/public/student/useCases/best-bc-college-no-overlay.png',
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "BC Wallet will now ask you to confirm what to send for the booking. Notice how they only need your first name so they can display it on the booking screen. By providing anything from your student card, they automatically know your student card hasn't been revoked.",
          requestOptions: {
            title: 'BestBC College Request',
            text: 'BestBC College would like some of your personal information.',
            requestedCredentials: [
              {
                name: 'student_card',
                properties: ['student_first_name'],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "The room is booked. Just by proving your first name, Best BC College could trust you are a current student, and could let others know there's a booking without revealing too much about you.",
          image: '/public/student/onboarding/student-accepted.svg',
        },
      ],
    },
  ],
}
