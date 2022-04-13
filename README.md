
# POLLARIZE APP

**Pollarize** app is made for those group of friends or coworkers that are indecisive on getting to a group agreement whether it is what to do on a Friday's night or where to eat for a get-together. This is meant to be a simple and quick way to poll opinions of everyone in your group in order to democratically come to an agreement or perhaps just see how "polarizing" all your preferences can be.  

---

## OBJECTIVE
- Allow users to create voting sessions that are shareable by links to their peers.
- Users can log in through OAuth with Google.
- Users can create voting items as well as vote/react to existing items. Creator can restricts poll to single vote per person or multiple votes per person. 
- Users can see what the results of the poll are as well as who vote for what
- Vote items can include uploaded images or scrape images from the web or google maps to a location or links to restaurant websites, etc... (As app improves, more things can be included to vote items after getting feedbacks from users)
- Simple feedback form for user to either report bugs or suggest improvements to the app

## PROCESS FLOW
1. User log in with Google account
2. User create poll session with a title and description and expiration date. 
3. App will generate a shareable link for user to share with others. 
4. Users can create polling items but users can only delete the items that they create.
5. Users can react to the item with :heart_eyes: (yes), :neutral_face: (neutral), and :rage: (no)
6. Users can see the result and who voted so far.
7. Creator can delete the poll or poll will automatically deleted after expiration date.

## TECH STACK

### Frontend
- Web Framework: **Angular**
- CSS Framework: **TailwindCSS**
- Host: ?

### Backend
- Framework: **Gin (Go)**
- Database: **PostgreSQL**
- Host: ?

### Devops
- Container: **Docker**
