Confused about how to contribute? Here's how you do it: Follow these steps to start contributing:

### Step 1: Forking the repository 

To work on this project, you will first need to make a copy of this repository along with [the profile card template repository](https://github.com/DiyaVj/Profile-Card). To do this, you should fork the repositories and then clone it so that you have a local working copy.

Get your own Fork/Copy of this repository by clicking Fork button at right upper corner of your screen.

![fork](https://user-images.githubusercontent.com/87236107/193420502-efb8d99e-aeaf-4d78-b42f-da8c5399d3e9.png)

### Step 2: Clone the Forked Repository
After forking the repositories, you can now clone it to have a local working copy of the codebase. In this repo you just need to clone template repo as only it contains code files.

To make your local copy of the repository follow the steps:

* Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

![68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636c6f6e652e706e67](https://user-images.githubusercontent.com/87236107/193536673-884238f8-783a-4e8b-b701-93666d86f181.png)
![68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636f70792d746f2d636c6970626f6172642e706e67](https://user-images.githubusercontent.com/87236107/193537571-dd32573a-c664-40f5-b9fe-3aa77c1a8c87.png)

Open a terminal in a blank folder and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

### Step 3: Edit your details
Now you can see all the files in your local system. Update your details in the code and customize your profile card according to you. You can play around colors, background, etc. 

### Step 4: Commit your changes
* Track your changes: 
```
git add . 
```
* Commit your changes 
```
git commit -m "Relevant message"
```
* Push the committed changes in your feature/main branch to your remote repo.
```
git push -u origin <your_branch_name/main>
```

### Step 5: Host your site
Go to the "Settings" on the right side. Then go to the "Pages" to host your website on github pages. There you'll find "Build and deployment" section, in the "Branch" select your feature branch or main and folder to ```/(root)```. Hit click on ```Save```. Wait for 1-2 minutes to deploy it. You are then able to see link to your website. Copy that link.

### Step 6: Do Contribution
Now visit ```Profile-Card-Collection``` repository which you forked.
* Go to the ```Profile_Card_Collection``` folder
* Edit readme and add your copied website link along with your name 
* To create a pull request, click on ```Compare and pull requests```. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.
* Add appropriate title and description to your pull request explaining your changes and efforts done.
* Click on ```Create Pull Request```.

## 🎉 Kudos! You have made a PR to the profile-card-collection. Sit back patiently and relax while your PR is reviewed and merged.
