class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        let currentUsername = this._likes.includes(username);

        if (currentUsername) {
            throw new Error(`You can't like the same story twice!`);
        }

        if (username == this.creator) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        let currentUsername = this._likes.includes(username);

        if (!currentUsername) {
            throw new Error(`You can't dislike this story!`);
        }

        let index = this._likes.indexOf(username);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = {
            id: id,
            username: username,
            content: content,
            replies: []
        }

        let commentWithId = this._comments.find(x => x.id === id);

        if (commentWithId) {
            let replyID = Number(commentWithId.id + '.' + (commentWithId.replies.length + 1));

            let reply = {
                id: replyID,
                username: username,
                content: content
            };

            commentWithId.replies.push(reply);

            return `You replied successfully`;

        }

        comment.id = this._comments.length + 1;
        this._comments.push(comment);

        return `${username} commented on ${this.title}`;
    }

    toString(sortingType) {
        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`,
        ];

        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a.id - b.id);

            for (const comment of this._comments) {
                comment.replies.sort((a, b) => a.id - b.id);
            }
        }

        if (sortingType === 'desc') {
            this._comments.sort((a, b) => b.id - a.id);

            for (const comment of this._comments) {
                comment.replies.sort((a, b) => b.id - a.id);
            }
        }

        if (sortingType === 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username));

            for (const comment of this._comments) {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            }
        }

        for (const comment of this._comments) {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            for (const reply of comment.replies) {
                result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
            }
        }

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
