import {
  FormButton,
  FormInput,
  FormSection,
  FormSelect,
  FormSpan,
  FormTextarea,
  FormWrap,
} from "assets/BasicStyle";
import React from "react";

function Form({
  submitHandler,
  changeHandler,
  nicknameRef,
  contentRef,
  character,
  tab,
  list,
  red,
  blue,
}) {
  return (
    <FormWrap onSubmit={submitHandler}>
      <FormSection>
        <span>
          <label htmlFor="nickname">nickname</label>
        </span>
        <FormSpan>
          <FormInput
            name="nickname"
            id="nickname"
            ref={nicknameRef}
            type="text"
            placeholder="Your nickname ( max : 20 )"
            value={list.nickname}
            onChange={changeHandler}
            maxLength={20}
            required
          />
        </FormSpan>
      </FormSection>
      <FormSection>
        <span>
          <label htmlFor="content">Content</label>
        </span>
        <FormSpan>
          <FormTextarea
            name="content"
            id="content"
            ref={contentRef}
            cols="30"
            rows="10"
            placeholder="Your Content ( max : 100 )"
            value={list.content}
            onChange={changeHandler}
            maxLength={100}
            required
          ></FormTextarea>
        </FormSpan>
      </FormSection>
      <FormSection>
        <span>
          <label htmlFor="writedTo">Who ?</label>
        </span>
        <FormSpan>
          <FormSelect
            name="writedTo"
            id="writedTo"
            onChange={changeHandler}
            value={list.writedTo}
          >
            {character.map((item) => {
              return (
                <option key={item.val} value={item.val}>
                  {item.name}
                </option>
              );
            })}
          </FormSelect>
        </FormSpan>
      </FormSection>
      <div>
        <FormButton color={tab === "cap" ? blue : red} type="submit">
          Send
        </FormButton>
      </div>
    </FormWrap>
  );
}

export default Form;
