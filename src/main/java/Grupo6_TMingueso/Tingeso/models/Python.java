package Grupo6_TMingueso.Tingeso.models;

import java.io.*;
import java.util.List;

/**
 * Created by mario on 17-10-17.
 */
public class Python {
    private String code;
    private List<String> output;
    private List<String> error;



    public void compileCode(){
        try{
            BufferedWriter file = new BufferedWriter(new FileWriter("pythonCode.py"));
            file.write(this.getCode());
            file.close();

            ProcessBuilder builder = new ProcessBuilder("python","pythonCode.py");
            Process compiler = builder.start();

            BufferedReader output = new BufferedReader(new InputStreamReader(compiler.getInputStream()));
            BufferedReader error = new BufferedReader(new InputStreamReader(compiler.getErrorStream()));

            System.out.println("Program Output: \n");
            String out;
            List<String> outputs = null;
            while ((out = output.readLine()) != null) {
                outputs.add(out);
                System.out.println(out);
            }

            System.out.println("Program Errors (if any):\n");
            String err;
            List<String> errors = null;
            while ((err = error.readLine()) != null) {
                errors.add(err);
                System.out.println(err);
            }
            this.setError(errors);
            this.setOutput(outputs);
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
    

    ////////////////////////////////////
    //////////  Constructors  //////////
    ////////////////////////////////////
    public Python(){
    }
    public Python(String code){
        this.setCode(code);
    }

    ////////////////////////////////////////////
    //////////// Setters and Getters ///////////
    ////////////////////////////////////////////
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<String> getOutput() {
        return output;
    }

    public void setOutput(List<String> output) {
        this.output = output;
    }

    public List<String> getError() {
        return error;
    }

    public void setError(List<String> error) {
        this.error = error;
    }
}
