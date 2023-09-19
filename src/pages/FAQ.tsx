import React from 'react'
import { useState } from 'react'
import Card from "~/components/molecules/Card/CardButton"

import Card1 from "~/assets/static/images/aboutUs/card1.png"
import Card2 from "~/assets/static/images/aboutUs/card2.png"
import Card3 from "~/assets/static/images/aboutUs/card3.png"
import Card4 from "~/assets/static/images/aboutUs/card4.png"
import Card5 from "~/assets/static/images/aboutUs/card5.png"
import Card7 from "~/assets/static/images/aboutUs/card7.png"

import AcordeonQuestions from '~/components/organisms/AccordeonQuestions/AcordeonQuestions'
import Title from '~/components/atoms/Title/Title'
import Input from '~/components/atoms/Title/InputText'

export default function FAQ() {

  const [Category, setCategory] = useState<string>("")
  const [text, setText] = useState<string>("")

  function sendCategory(event: string) {
    //console.log('Child did:', event);
    setCategory(event)
  }

  function textSearch(event: string) {
    //console.log('Child did:', event);
    setText(event)
    setCategory("")
  }

  const CardsData = [
    {
      route: Card1,
      name: "",
      text: "Virufy App",
    },
    {
      route: Card2,
      name: "",
      text: "About Virufy",
    },
    {
      route: Card3,
      name: "",
      text: "About AI",
    },
    {
      route: Card4,
      name: "",
      text: "Finances",
    },
    {
      route: Card5,
      name: "",
      text: "Privacy",
    },
    {
      route: Card7,
      name: "",
      text: "Others",
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <Input
        handleAction={textSearch}
      />
      <div className="flex flex-col justify-center items-center max-w-[1440px] ">
        <Title
          Text={"FAQ TOPICS"}
          H={"h1"}
          TitleClassProps={"w-[100%] mt-8 ml-[20px] sm:w-auto md:w-auto lg:w-auto xl:w-[100%]"}
        />
        <Card
          CardsData={CardsData}
          CardClassProps="hover:border hover:border-[#30DA74]
                          flex flex-col 
                          text-center items-center justify-center 
                          w-[197px] h-[150px] 
                          sm:w-1/1 md:w-[197px] lg:w-[197px] xl:w-[197px] mb-4 mt-4 
                          rounded-[11.49px] ml-4 bg-[#F3F4F6] "
          handleAction={sendCategory}
          Category={Category}
        />
        {/* <Title
          Text={Category}
          H={"h1"}
          TitleClassProps={"w-[100%] mt-8 ml-[20px] sm:w-auto md:w-auto lg:w-auto xl:w-[100%]"}
        /> */}

        <AcordeonQuestions
          Category={Category}
          TextSearch={text}
        />

      </div>
    </div>
  )
}