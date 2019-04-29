import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'atom-component',
  styleUrl: 'atom.css',
  shadow: true
})

export class AtomComponent {

  @Prop() username: string;

  @Prop() items;


  render() {
    console.log(this.items);
    return (

      <div class="atom-navigation">

        <img src="https://www.learnwithatom.com/logo.png" class="logo" />
        <div class="menu">


          <ul id="menu">
            <li>
              <input id="check01" type="checkbox" name="menu" />
              <label htmlFor="check01"><img src="https://www.shareicon.net/data/32x32/2016/09/15/829458_user_512x512.png" /> {this.username}</label>

              <ul class="submenu">
                {
                  this.items.map(function (item, index) {
                    return <li key={index}><a href={item.route}>{item.name}</a></li>
                  })
                }

              </ul>
            </li>
          </ul>

        </div>
      </div>

    );
  }
}
