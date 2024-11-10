import type { RoutesNamesList } from "@typed-router/__routes";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    // const { authenticated } = storeToRefs(useAuthStore());
    const { logUserOut, getToken } = useAuthStore();
    // const token = getToken;
    const token = getItem("token");

    console.log('token, storedToken', token)
    // if (token !== null) {
    //     // check if value exists
    //     authenticated.value = true; // update the state to authenticated
    // }
    
    const guestPage: RoutesNamesList[] = [
        'index',
        'auth-login',
        'auth-register',
        'auth-new-password',
        'auth-set-new-password',
        'auth-otp-sent',
        'auth-registration-successful',
        'auth-forgot',
        'auth-reset-successful',
        'auth-email-verified',
        'auth-reset-successful',
        'general-events',
        'general-programmes',
        'general-event-event_id',
        'general-programms-program_id-details',
        'general-esos',
        'general-eso-eso_id-details',
        
       
    ];
    
    // const guestPageTwo: RoutesNamesList[] = [
    //     'index',
    //     'login',
    //     'signup',
    //     'forgotpassword'
    // ];

    // if token exists and url includes guestPageTwo redirect to dashboard
    // if (token && guestPageTwo.includes(to.name as RoutesNamesList) ) {
    //   return navigateTo("/dashboard");
    // }

    
    if(!token && !guestPage.includes(to.name as RoutesNamesList)) {
      logUserOut()
      return navigateTo('/auth/login');
    }
    return true
})