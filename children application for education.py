import tkinter as tk
from random import randint

class EnglishEducationalApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Children's English Educational Application")
        self.lesson_frame = tk.Frame(root)
        self.lesson_frame.pack()
        self.quiz_frame = tk.Frame(root)
        self.quiz_frame.pack()
        self.progress_frame = tk.Frame(root)
        self.progress_frame.pack()
        self.reward_frame = tk.Frame(root)
        self.reward_frame.pack()
        self.display_lesson()

    def display_lesson(self):
        # Display interactive lesson content
        lesson_label = tk.Label(self.lesson_frame, text="English Lesson Content", font=('Helvetica', 24))
        lesson_label.pack()
        self.lesson_text = tk.Text(self.lesson_frame, height=20, width=40)
        self.lesson_text.pack()
        self.lesson_text.insert(tk.END, "Welcome to our English lesson! Today, we will learn about nouns.")

    def display_quiz(self):
        # Display quiz questions and answers
        self.quiz_frame.pack_forget()
        self.quiz_frame = tk.Frame(self.root)
        self.quiz_frame.pack()
        quiz_label = tk.Label(self.quiz_frame, text="Quiz Question", font=('Helvetica', 24))
        quiz_label.pack()
        self.quiz_question = tk.Text(self.quiz_frame, height=120, width=100)
        self.quiz_question.pack()
        self.quiz_question.insert(tk.END, "What is a noun?")
        quiz_entry = tk.Entry(self.quiz_frame, font=('Helvetica', 24))
        quiz_entry.pack()
        quiz_button = tk.Button(self.quiz_frame, text="Submit", command=self.check_answer)
        quiz_button.pack()

    def display_progress(self):
        # Display progress tracking information
        progress_label = tk.Label(self.progress_frame, text="Progress", font=('Helvetica', 24))
        progress_label.pack()
        self.progress_text = tk.Text(self.progress_frame, height=5, width=40)
        self.progress_text.pack()
        self.progress_text.insert(tk.END, "You have completed 1 lesson and 1 quiz.")

    def display_reward(self):
        # Display reward system information
        reward_label = tk.Label(self.reward_frame, text="Reward", font=('Helvetica', 24))
        reward_label.pack()
        self.reward_text = tk.Text(self.reward_frame, height=5, width=40)
        self.reward_text.pack()
        self.reward_text.insert(tk.END, "You have earned 10 points!")

    def check_answer(self):
        # Check quiz answer and provide feedback
        user_answer = self.quiz_entry.get()
        if user_answer.lower() == "a person, place, or thing":
            self.quiz_question.delete(1.0, tk.END)
            self.quiz_question.insert(tk.END, "Correct! A noun is a person, place, or thing.")
        else:
            self.quiz_question.delete(1.0, tk.END)
            self.quiz_question.insert(tk.END, "Incorrect. A noun is a person, place, or thing.")
        self.display_progress()

root = tk.Tk()
app = EnglishEducationalApp(root)
root.mainloop()
