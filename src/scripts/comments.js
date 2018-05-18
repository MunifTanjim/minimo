const commentList = document.querySelector('.comment-list')
const respondBlock = document.querySelector('#respond')
const commentForm = respondBlock.querySelector('form')
const cancelReplyLink = respondBlock.querySelector('#cancel-comment-reply-link')
const parentIdInput = respondBlock.querySelector('[name="fields[parent_id]"]')

const moveRespondBlock = commentId => {
  if (!commentId) return

  const comment = commentList.querySelector(`#comment-${commentId} article`)

  parentIdInput.value = commentId
  comment.parentNode.insertBefore(respondBlock, comment.nextSibling)
  cancelReplyLink.style.display = ''

  commentForm.querySelector('textarea').focus()

  return false
}

export const initComments = () => {
  cancelReplyLink.style.display = 'none'

  cancelReplyLink.addEventListener('click', e => {
    e.preventDefault()

    parentIdInput.value = ''
    commentList.parentNode.appendChild(respondBlock)
    cancelReplyLink.style.display = 'none'
  })

  window.moveRespondBlock = moveRespondBlock
}
