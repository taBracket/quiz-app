import React, { Component } from 'react'
import './quizApp.css'
export default class QuizContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [
                {
                    title: 'which one is German',
                    options: [
                        { op: 1, value: 'BMW' },
                        { op: 2, value: 'GMS' },
                        { op: 3, value: 'TOYOTA' },
                        { op: 4, value: 'FERRARI' },
                    ]
                },
                {
                    title: 'which one is Japanese',
                    options: [
                        { op: 1, value: 'BMW' },
                        { op: 2, value: 'GMS' },
                        { op: 3, value: 'TOYOTA' },
                        { op: 4, value: 'FERRARI' },
                    ]
                },
                {
                    title: 'which one is Italian',
                    options: [
                        { op: 1, value: 'BMW' },
                        { op: 2, value: 'GMS' },
                        { op: 3, value: 'TOYOTA' },
                        { op: 4, value: 'FERRARI' },
                    ]
                },
            ],
            quizCounter: 0,
            correctAnswerCounter: 0,
            timer: 30

        }
    }

    render() {
        return (
            <form >
                <h3 >title</h3>
                <div className='labels-container'>
                    <label htmlFor="radio-btn-1">option 1</label>
                    <label htmlFor="radio-btn-2">option 2</label>
                    <label htmlFor="radio-btn-3">option 3</label>
                    <label htmlFor="radio-btn-4">option 4</label>


                    <input type="radio" id='radio-btn-1' name='option-radios' />
                    <input type="radio" id='radio-btn-2' name='option-radios' />
                    <input type="radio" id='radio-btn-3' name='option-radios' />
                    <input type="radio" id='radio-btn-4' name='option-radios' />
                    <input type="submit" name="submit-btn" id="submit-btn" />
                </div>
                <div className='infos-display'>
                    <h6><span>01</span>: <span>00</span></h6>
                    <h6><span>1</span> of <span>10</span></h6>
                    <h6><span title='you earned'>500</span>/<span title='total'>1000</span></h6>
                </div>
            </form>

        )
    }
}
