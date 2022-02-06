describe('FAQ Accordion Card', () => {
  it('should toggle questions', async () => {
    await browser.url(`http://localhost:4567`)

    await expect($('body')).toHaveTextContaining(
      'How many team members can I invite?'
    )
    await expect($('body')).toHaveTextContaining(
      'What is the maximum file upload size?'
    )
    await expect($('body')).toHaveTextContaining('How do I reset my password?')
    await expect($('body')).toHaveTextContaining(
      'Can I cancel my subscription?'
    )
    await expect($('body')).toHaveTextContaining(
      'Do you provide additional support?'
    )

    await expect($('body')).toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )

    await $('=What is the maximum file upload size?').click()
    await expect($('body')).not.toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )

    await $('=How do I reset my password?').click()
    await expect($('body')).not.toHaveTextContaining(
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    )
    await expect($('body')).not.toHaveTextContaining(
      'No more than 2GB. All files in your account must fit your allotted storage space.'
    )
    await expect($('body')).toHaveTextContaining(
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    )
  })
})
