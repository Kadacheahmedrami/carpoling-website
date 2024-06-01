const commentsData = [
    { user: { nom: 'John', prenom: 'Doe' }, commentText: 'Could be better.', rating: 3 },
    { user: { nom: 'Jane', prenom: 'Smith' }, commentText: 'Not bad.', rating: 2 },
    { user: { nom: 'Alice', prenom: 'Johnson' }, commentText: 'Great Service!', rating: 5 }
];


function populateComments(commentsArray) {
    const commentsList = document.getElementById('comments-list');
    
    commentsArray.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        const commentWriter = document.createElement('div');
        commentWriter.classList.add('user');
        commentWriter.textContent = comment.user.nom + ' ' + comment.user.prenom;

        const commentTextDiv = document.createElement('div');
        commentTextDiv.classList.add('comment-text');
        commentTextDiv.textContent = comment.commentText;

        const rating = "★".repeat(comment.rating);
        const leftovers = "★".repeat(5 - comment.rating);

        const commentRatingDiv = document.createElement('div');
        commentRatingDiv.classList.add('comment-rating');
        commentRatingDiv.innerHTML = `Rating: `;

        const star = document.createElement('div');
        star.classList.add('star1');
        star.innerHTML = ` ${rating} `;

        const left = document.createElement('div');
        left.classList.add('star2');
        left.innerHTML = ` ${leftovers} `;

        commentRatingDiv.appendChild(star);
        commentRatingDiv.appendChild(left);

        commentDiv.appendChild(commentWriter);
        commentDiv.appendChild(commentTextDiv);
        commentDiv.appendChild(commentRatingDiv);

        commentsList.appendChild(commentDiv);
    });
}

// Example usage:
populateComments(commentsData);
