package Grupo6_TMingueso.Tingeso;

import Grupo6_TMingueso.Tingeso.models.Python;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TingesoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TingesoApplication.class, args);
		String code = "a = [1, 2, 3]\n" +
				"b = [4, 5, 6]\n" +
				"print(5)\n" +
				"c = [a[0]+b[0], a[1]+b[1], a[2]+b[2]]\n" +
				"print(\"El valor de a es: \",a)\n" +
				"print(\"El valor de b es: \",b)\n" +
				"print(\"El valor de c es: \",c)\n" +
				"print(hola)\n" +
				"print(\"Bueno\")\n" +
				"print(poto";
		Python python = new Python(code);
		python.compileCode();
	}
}
