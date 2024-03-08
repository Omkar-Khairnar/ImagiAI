import Header from '@/components/shared/Header'
import TransfromationForm from '@/components/shared/TransfromationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth, redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

const AddTransformationTypePage =async({params} : SearchParamProps) => {
  const transformation = transformationTypes[params.type];
  const {userId} = auth();
  
  if(!userId) return redirectToSignIn();
  const user = await getUserById(userId);

  return (
    <>
    <Header title={transformation.title} subtitle={transformation.subTitle}/>
    <TransfromationForm
      action='Add'
      userId={user._id}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance}
    />
    </>
  )
}

export default AddTransformationTypePage
