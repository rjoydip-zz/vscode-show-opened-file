# FAQs

- [How to configure the settings in my project?](#how-to-configure-the-settings-in-my-project)

## How to configure the settings in my project?

Create a `.vscode` folder in the root of project. Inside of `.vscode` folder create a json file named `settings.json`.
Inside of the `settings.json`, type following key-value pairs. By the way you'll get intelli-sense.

```json
{
    "showOpenedFile.AlertOnLoad": true, // default true
    "showOpenedFile.StatusbarOnLoad": true, // default true
}
```