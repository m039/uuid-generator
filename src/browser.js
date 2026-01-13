import { generatePassword as gp } from './core.ts';
import toast from "./toast.js";

export function generatePassword(config) {
  return gp(config);
}

export function createToast() {
  return toast.createToast();
}

