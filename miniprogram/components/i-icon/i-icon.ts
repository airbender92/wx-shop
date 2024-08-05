interface IIconProperties {
  name: string;
  color?: string;
  size?: string;
}

interface IIconData extends Record<string, any>{}
interface IIConMethods extends Record<string, Function>{}

Component<IIconProperties, IIconData, IIConMethods>({
  properties: {
    name: String,
    color: {
      type:String,
      value: '#6faf92'
    },
    size: {
      type: String,
      value: '34'
    }
  },
  data: {

  },
  methods: {
    
  }
})