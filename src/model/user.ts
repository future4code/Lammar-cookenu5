export type user = {
    id: string,
    email: string,
    password: string,
    name: string
 }
 
 export interface UserInputDTO {
    name: string,
    email: string,
    password: string
 }
 
 export interface LoginInputDTO {
    email: string,
    password: string
 }

 export interface profileInputUserDTO {
   id: string,
   name: string,
   email: string
 };

 export interface ProfileInputDTO {
    token: string
 }

export type AuthenticationData = {
    id: string
 }

//  export interface profileUser {
//    id: string,
//    name: string,
//    email: string

//  }