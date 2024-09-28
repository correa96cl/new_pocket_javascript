import fastify from "fastify";
import { title } from "process";
import { createGoal } from "../functions/create-goal";
import z, { ZodType } from "zod";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../functions/get-week-pending-goals";
import { createGoalCompletion } from "../functions/create-gol-completion";


const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.get('/pending-goals', async() => {
    const {pendingGoals} = await getWeekPendingGoals()
    return {pendingGoals}
})


app.post('/goals', {
    schema: {
        body: z.object({
            title: z.string(),
            desiredWeeklyFrequency: z.number()
        })
    }
}, async (request) => {

    const {title, desiredWeeklyFrequency} = request.body


    await createGoal({
        title,
        desiredWeeklyFrequency
    })
})

app.post('/completions', {
    schema: {
        body: z.object({
            goalId: z.string()
        }),
    }
},
async request => {
    const {goalId} = request.body

   await createGoalCompletion({
        goalId
    })

   
})

app.listen(
    {
        port: 3333
    }
).then(() => {
    console.log("HTTP server running on http://localhost:3333");
});