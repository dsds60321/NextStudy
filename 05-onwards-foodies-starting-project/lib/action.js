'use server';

// 'use server' 서버에서만 실행 되는 함수
// action에 메서드를 작성하여 nextjs 서버 측에 요청을 보냅니다.
// 'use client' 사용시에는 오류가 발생함
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title : formData.get('title'),
    summary : formData.get('summary'),
    instructions : formData.get('instructions'),
    image : formData.get('image'),
    creator : formData.get('name'),
    creator_email : formData.get('email')
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid Input'
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}