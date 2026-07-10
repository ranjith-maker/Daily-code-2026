import twilio from 'twilio'
import AppError from '../utils/CommonError.js'
import dotenv from 'dotenv';
dotenv.config(); 



const accountSid = process.env.TWILIO_ACCOUNT_SID
const serviceSid = process.env.TWILIO_SERVICE_SID
const authToken = process.env.TWILIO_TOKEN





const client = twilio(accountSid , authToken)

//send otp to phone no.

export const sendOtpToPhoneNumber = async(phoneNumber)=>{

try{

console.log("Sending OTP to:", phoneNumber)

if(!phoneNumber){
    throw new AppError("Phone number is required")
}


const response = await client.verify.v2.services(serviceSid)
.verifications
.create({
    to: phoneNumber,
    channel:"sms"
})


return response


}catch(error){

console.log(error)

throw new AppError("Failed to send OTP")

}

}


//verify the otp now

export const verifyOtpInNumber = async(phoneNumber, otp) => {
    
  try {
        console.log('This is my otp',otp);
        console.log('this is my number', phoneNumber);

    const response = await client.verify.v2.services(serviceSid).verificationChecks.create({
            to:phoneNumber,
            code : otp
        })
        
        console.log('This is my verification OTP response', response);
        return response
        
    } catch (error) {
        console.log('Error: ',error);
        throw new AppError('OTP verification failed')
        
}}







