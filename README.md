# Custom Confirm Plugin for Vue 3
__it is only for test yarn workspaces! and maybe later to check the release in npm__

*Please note that this is just an example, and you can modify the content and structure of the files according to your specific needs and preferences.*

This repository contains a custom confirm plugin for Vue 3 that replicates the functionality of the native JavaScript `confirm()` function. It provides a customizable confirmation dialog component that can be used in Vue 3 applications.

## Installation

To install the custom confirm plugin, use the following command:

`yarn install`


## Usage

Import the `useConfirm` function from the `@pkg/confirm` package and use it to create a confirm instance. Then, you can call the `confirm` function to show the confirmation dialog.

```javascript
import { useConfirm } from '@pkg/confirm';

const { confirm } = useConfirm();

confirm({
  message: 'Are you sure?',
  onDone() {
    console.log('Ok!');
  },
  onClose() {
    console.log('Closed!');
  },
});
```

The confirm function takes an object with the following properties:

message (string, required): The message to be displayed in the confirmation dialog.
onDone (function, optional): A callback function to be called when the user confirms the action.
onClose (function, optional): A callback function to be called when the user closes the confirmation dialog.

Customization
You can customize the appearance and behavior of the confirmation dialog by modifying the ConfirmDialog component. The component is located in the ConfirmDialog.vue file. Feel free to edit this file according to your requirements.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This custom confirm plugin is open-source and is licensed under the MIT License.