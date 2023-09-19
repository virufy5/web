import iconDrop from "~/assets/static/icons/dropzone/icon.svg"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import React from 'react';
import { useDropzone } from 'react-dropzone';
import TitleText from "~/components/molecules/TitleText/TitleText";
import Button from "~/components/atoms/button/Button"
import { useI18n } from "~/i18n";

export default function Forms({
}) {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const { tellYourStory: { form } } = useI18n()

    const files = acceptedFiles.map(file => (
        <li key={__filename}>
            {__filename} - {file.size} bytes
        </li>
    ));

    return (
        <>
            <form className="mt-16 px-5 sm:px-10 max-w-[1280px] lg:items-center m-auto" >
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{form.name}</label>
                    <input type="name" id="name" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smlock w-full p-2.5 border-gray-400" required></input>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">{form.email}</label>
                    <input type="email" id="email" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-sm block w-full p-2.5 border-gray-400" required></input>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">{form.message}</label>
                    <textarea id="message" rows={5} className="p-2.5 focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smblock w-full border-gray-400" required></textarea>
                </div>
                <div>
                    <label htmlFor="user_photo" className="block mb-2 text-sm font-medium text-gray-900">{form.uploadPhoto}</label>
                    <div className="flex items-center justify-center w-full flex-col">
                        <label htmlFor="dropzone-file" className="flex containerflex flex-col items-center justify-center w-full h-24 border border-gray-400 cursor-pointer">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6" {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <ImageAtomLocal src={iconDrop} imagesize="px50" ImageStyleProps="" alt="drop" border="" />
                            </div>
                        </label>
                        <div className="flex flex-col items-start w-full mt-5 mb-10">
                            <TitleText TitleSize="h4" TitleLabel={form.titleFiles} TextSize="normal" TextLabel={files} ContainerTextProps="" ContainerTitleProps="" TitleClassProps="" TextClassProps=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-20">
                        <Button size="medium" type="primary" path="#" label={form.button} />
                    </div>
                </div>
            </form>
        </>
    )
}