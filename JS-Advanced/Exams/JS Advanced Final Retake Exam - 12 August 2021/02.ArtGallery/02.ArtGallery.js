class ArtGallery {
    constructor(creator) {
        this.creator = creator;

        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles[articleModel]) {
            throw new Error(`This article model is not included in this gallery!`);
        }

        let article = this.listOfArticles.find(x => {
            return (x.model == articleModel && x.articleName == articleName);
        });

        if (article) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ model: articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;

        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();

        let article = this.listOfArticles.find(x => {
            return (x.model == articleModel && x.articleName == articleName);
        });

        if (!article) {
            throw new Error(`This article is not found.`);
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.guests.find(x => x.guestName == guestName)
        if (!guest) {
            return `This guest is not invited.`;
        }

        if (guest.points < this.possibleArticles[article.model]) {
            return `You need to more points to purchase the article.`;
        }

        guest.points -= this.possibleArticles[article.model];
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[article.model]} points.`;
    }
    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            let result = [];

            result.push(`Articles information:`);

            this.listOfArticles.forEach(x => {
                result.push(`${x.model} - ${x.articleName} - ${x.quantity}`);
            });


            return result.join('\n');
        } else {
            let result = [];

            result.push(`Guests information:`);

            this.guests.forEach(x => {
                result.push(`${x.guestName} - ${x.purchaseArticle}`);
            });

            return result.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



