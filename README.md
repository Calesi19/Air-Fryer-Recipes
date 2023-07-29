# Air Fryer Recipes

!['Demo For Site']("https://github.com/Calesi19/Air-Fryer-Recipes/blob/main/demo.gif?raw=true")

## Purpose

Bought my father an Air Fryer and he constantly struggles to remember the temperature and times for each food. I sticked an NFC tag unto the Air Fryer and linked it to this simple, small site that has all his favorite recipes.

This site can be used as a template for anyone that wants a simple way to reach their personal and family recipes in a quick and accessible manner while in the kitchen.

I'm using React + TypeScript and Firebase as the database. Recipes can be updated anytime using the Firebase dashboard as CMS.


## Firebase Layout


- **Firestore**
  - **recipes** (Collection)
    - **autoID** (Document)
      - `name` (String)
      - `temperature` (String)
      - `time` (String)
      - `instructions` (String Array)
         - `step` 
      - `ingredients` (String Array)
         - `ingredient`
      - `image` (String)
      - `video` (String)
    
