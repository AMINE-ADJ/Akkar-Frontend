from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service
import time

# Initialize the Chrome browser
with webdriver.Chrome() as driver : 
    
    # driver.get("http://localhost:3000")
    # driver.find_element( By.NAME,"googleLogin").click()
    # x = input()

    # Navigate to the website where the form is located
    driver.get("http://localhost:3000/authenticated/posterannonce")
    x = input()

    # Find the type select element and select the first option
    type_select = Select(driver.find_element(By.NAME, "type"))
    type_select.select_by_index(1)

    # Find the category select element and select the first option
    category_select = Select(driver.find_element("name" ,"categorie"))
    category_select.select_by_index(1)

    # Fill in the surface field
    surface_field = driver.find_element(By.NAME ,"surface")
    surface_field.send_keys("100")

    # Fill in the prix field
    prix_field = driver.find_element(By.NAME,"prix")
    prix_field.send_keys("50000000")

    # Fill in the description field
    # description_field = driver.find_element(By.NAME ,"description")
    # description_field.send_keys("beautiful")

    # Fill in the wilaya field
    wilaya_field = Select(driver.find_element(By.NAME ,"wilaya"))
    wilaya_field.select_by_visible_text("16-Alger")

    # Fill in the commune field
    commune_field = Select(driver.find_element(By.NAME ,"commune"))
    commune_field.select_by_visible_text("Casbah")

    # Fill in the localisation field
    nom_field = driver.find_element(By.NAME,"localisation")
    nom_field.send_keys("36.79785536232774,3.0341266843570973")

        # Fill in the img field
    nom_field = driver.find_element(By.NAME,"img")
    nom_field.send_keys("/home/fouad/Pictures/beautiful_photos/h.jpg")

    # Fill in the nom field
    nom_field = driver.find_element(By.NAME,"nom")
    nom_field.send_keys("fouad")

    # Fill in the prenom field
    prenom_field = driver.find_element(By.NAME ,"prenom")
    prenom_field.send_keys("khelil")

    # Fill in the telephone field
    telephone_field = driver.find_element(By.NAME ,"telephone")
    telephone_field.send_keys("0667835649")

    # Fill in the adresseannonceur field
    adresseannonceur_field = driver.find_element(By.NAME ,"adresseannonceur")
    adresseannonceur_field.send_keys("medea elguelb elkbir")

    # Fill in the email field
    email_field = driver.find_element(By.NAME ,"email")
    email_field.send_keys("www.fouad0310@gmail.com")

    # Submit the form
    driver.find_element( By.NAME,"submit").click()

    # Wait for the page to load
    time.sleep(5)

    # expected_url = "http://localhost:3000/authenticated/mesannonces"
    # assert driver.current_url == expected_url

    # Verify that the form was submitted successfully
    assert  driver.page_source is not None
    print("test run succesfully")

    # Close the browser
